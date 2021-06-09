import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../index.css";
import { Form, Input, Button, Radio } from "antd";
import {HiSearch} from "react-icons/hi"

const FormLayoutDemo = () => {
  const [formLayout, setFormLayout] = useState("horizontal");

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <>
      <Form>
        <Form.Item label="Gerais" name="layout"></Form.Item>
        <Form.Item label="Código Aderido">
          <div className="aderido">
            <Input placeholder="Ex: 04454" />
            <HiSearch size="20" />
          </div>
        </Form.Item>
        <Form.Item label="Descrição">
          <Input placeholder="Ex: CIG7" />
        </Form.Item>
        <Form.Item label="Vigência">
          <Input type="date" />
          <Input type="date" />
        </Form.Item>
        <Form.Item label="Classificação">
          <Input placeholder="" />
        </Form.Item>
        <Form.Item label="Liberado">
          <Input placeholder="Ex: Sim" />
        </Form.Item>
        <Form.Item label="Carência Falso Foco (por dia)">
          <Input placeholder="Ex: 30" />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Exportar CSV</Button>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Liberar</Button>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button type="primary">Limpar Tela</Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormLayoutDemo;