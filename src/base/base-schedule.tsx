import React, { Component } from "react";
import { Table, Card } from "react-bootstrap";

import { datalakeDoc } from "../shared/firebase";
import { weekDays, dayPeriods } from "../shared/data";
import { Option } from "../shared/types";

type StateData = number[][];

function getInitialStateData(): StateData {
  const arr: StateData = [];
  for (let p = 0; p < dayPeriods.length; p++) {
    arr.push([]);
    for (let d = 0; d < weekDays.length; d++) {
      arr[p].push(0);
    }
  }
  return arr;
}

interface Props {
  baseId: string;
}

interface State {
  data: StateData;
}

export default class BaseSchedule extends Component<Props, State> {
  state = {
    data: getInitialStateData()
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
          data: getInitialStateData()
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
    const numDays = weekDays.length;
    const numPeriods = dayPeriods.length;
    for (let d = 1; d <= numDays; d++) {
      for (let p = 1; p <= numPeriods; p++) {
        const id = `${this.props.baseId}_0_${d}_${p}`;
        const unsubscribe = datalakeDoc(id).onSnapshot(snapshot => {
          const snapshotData = snapshot.data();
          if (snapshotData) {
            const updatedData = [...this.state.data];
            updatedData[p - 1][d - 1] = snapshotData.c;
            this.setState({
              data: updatedData
            });
          }
        });
        this.subscriptions.push(unsubscribe);
      }
    }
  };

  renderRow = (row: number[], index: number) => (
    <tr>
      <td style={{ fontSize: 16 }}>{dayPeriods[index].name}</td>
      {row.map((col: number) => (
        <td style={{ padding: 0, verticalAlign: "middle" }}>{col}</td>
      ))}
    </tr>
  );

  render() {
    return (
      <Card style={{ textAlign: "center" }}>
        <Card.Header style={{ fontWeight: "bold" }}>
          Ocorrências por dia &amp; período
        </Card.Header>
        <Table bordered style={{ marginBottom: 0 }}>
          <thead>
            <tr>
              <th style={{ width: 60 }} />
              {weekDays.map((d: Option) => (
                <th style={{ fontWeight: "normal" }}>{d.name}</th>
              ))}
            </tr>
          </thead>
          <tbody style={{ fontSize: "1.5em" }}>
            {this.state.data.map((row: number[], index: number) =>
              this.renderRow(row, index)
            )}
          </tbody>
        </Table>
      </Card>
    );
  }
}
