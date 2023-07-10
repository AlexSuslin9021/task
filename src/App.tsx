import React, { useState } from 'react';

import './App.css';

interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
  colors: Color[];
}

interface Color {
  id: number;
  name: string;
}

interface PropsParamEditor {
  params: Param[];
  model: Model;
}

const ParamEditor: React.FC<PropsParamEditor> = ({ params, model }) => {
  const [paramValues, setParamValues] = useState<ParamValue[]>(model.paramValues);

  const handleChange = (paramId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedParamValues = paramValues.map((paramValue) => {
      if (paramValue.paramId === paramId) {
        return {
          ...paramValue,
          value: event.target.value,
        };
      }
      return paramValue;
    });
    setParamValues(updatedParamValues);
  };

  const getModel = () => {
    return { paramValues: paramValues, colors: model.colors };
  };

  return (
      <div>
        {params.map((param) => {
          const paramValue = paramValues.find((pv) => pv.paramId === param.id);
          const value = paramValue ? paramValue.value : '';
          return (
              <div key={param.id}>
                <label>{param.name}</label>
                <input
                    type="text"
                    value={value}
                    onChange={(event) => handleChange(param.id, event)}
                />
              </div>
          );
        })}
      </div>
  );
};

function App() {
  const params: Param[] = [
    {
      id: 1,
      name: 'Назначение',
      type: 'string',
    },
    {
      id: 2,
      name: 'Длина',
      type: 'string',
    },
  ];

  const model: Model = {
    paramValues: [
      {
        paramId: 1,
        value: 'повседневное',
      },
      {
        paramId: 2,
        value: 'макси',
      },
    ],
    colors: [],
  };

  return (
      <div className="App">
        <ParamEditor params={params} model={model} />
      </div>
  );
}

export default App;


