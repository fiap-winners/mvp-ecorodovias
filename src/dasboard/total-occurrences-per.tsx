import React, { Component } from "react";
import {
  XAxis,
  YAxis,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import { db } from "../shared/firebase";
import { Option } from "../shared/types";

interface DataItem {
  order: number;
  name: string;
  value: number;
}

interface Props {
  baseId?: string;
  options: Option[];
  genKey: (id: number) => string;
}

interface State {
  data: {
    [key: string]: DataItem;
  };
}

export default class TotalOccurrencesPer extends Component<Props, State> {
  state = {
    data: {}
  };

  subscriptions: (() => void)[] = [];

  componentDidMount = () => {
    this.subscribe();
  };

  componentWillUnmount = () => {
    this.unsubscribe();
  };

  componentDidUpdate = (prevProps: Props) => {
    if (this.props.baseId !== prevProps.baseId) {
      this.setState(
        {
          data: {}
        },
        () => {
          this.unsubscribe();
          this.subscribe();
        }
      );
    }
  };

  unsubscribe = () => {
    this.subscriptions.forEach(unsubscribe => unsubscribe());
  };

  subscribe = () => {
    this.subscriptions = this.props.options.map(
      (option: Option, index: number) => {
        const id = this.props.genKey(option.id);
        return db
          .collection("datalake")
          .doc(id)
          .onSnapshot(snapshot => {
            const d = snapshot.data();
            this.setState(prevState => ({
              data: {
                ...prevState.data,
                [id]: {
                  order: index,
                  name: option.name,
                  value: d ? d.c : 0
                }
              }
            }));
          });
      }
    );
  };

  getSortedData = () => {
    const items: DataItem[] = Object.values(this.state.data);
    return items.sort((a: DataItem, b: DataItem) =>
      a.order > b.order ? 1 : -1
    );
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={this.getSortedData()}>
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
