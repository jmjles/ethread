import {
  LazyQueryExecFunction,
  OperationVariables,
  useLazyQuery,
} from "@apollo/client";
import { getThreadsQuery } from "./schemas";
import React, { SetStateAction } from "react";

export const serverURL = "https://ethred-f9ff2609898c.herokuapp.com/";

export const UseGetThreads = (
  setData: React.Dispatch<SetStateAction<any>>,
  setError: React.Dispatch<SetStateAction<boolean>>
): Returns => {
  const [getThreads, { loading, error, data }] = useLazyQuery(getThreadsQuery, {
    onCompleted: (data) => {
      setData(data.getThreads);
    },
    onError: (er) => {
      setError(true);
    },
  });
  return [getThreads, { loading, error, data }];
};
type Returns = [
  LazyQueryExecFunction<any, OperationVariables>,
  { loading: boolean; error: any; data: any }
];
