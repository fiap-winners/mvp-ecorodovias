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

interface dataItem {
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
    [key: string]: dataItem;
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
    this.subscriptions = this.props.options.map((option: Option) => {
      const id = this.props.genKey(option.id);
      return db
        .collection("datalake")
        .doc(id)
        .onSnapshot(snapshot => {
          const d = snapshot.data();
          if (d) {
            this.setState(prevState => ({
              data: {
                ...prevState.data,
                [id]: {
                  name: option.name,
                  value: d.c
                }
              }
            }));
          }
        });
    });
  };

  render() {
    return (
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={Object.values(this.state.data)}>
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
