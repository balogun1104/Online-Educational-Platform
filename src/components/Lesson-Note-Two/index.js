import { Form, Input, Button } from "antd";
import React from "react";
import "./styles.css";

const LessonNoteTwo = ({ nextStep }) => {
  const [form] = Form.useForm();
  return (
    <div className="lessonNoteWrapper">
      <div className="lessonNote">
        <div className="lessonNoteInner">
        <h4>
            Behavioural Objectives: At the end of the lesson, student should be
            able to{" "}
          </h4>
          <Form form={form} onFinish={nextStep} className="formWrapper">
            <Form.Item
              label="(i)"
              name="i"
              rules={[{ required: true, message: "Please enter school here" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="(ii)"
              name="ii"
              rules={[{ required: true, message: "Please enter school here" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="(iii)"
              name="iii"
              rules={[{ required: true, message: "Please enter school here" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="(iv)"
              name="iv"
              rules={[{ required: true, message: "Please enter school here" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="(v)"
              name="v"
              rules={[{ required: true, message: "Please enter school here" }]}
            >
              <Input />
            </Form.Item>
            {/* 
          <Form.Item
            label="(iv)"
            name="i"
            rules={[{ required: true, message: "Please enter school here" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="(v)"
            name="i"
            rules={[{ required: true, message: "Please enter school here" }]}
          >
            <Input />
          </Form.Item> */}

            <Form.Item
              label="Previous Knowlegge"
              name="previousKnowlege"
              rules={[{ required: true, message: "Please enter school here" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Instuction Material"
              name="Instuction Material"
              rules={[{ required: true, message: "Please enter school here" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Refrence Material"
              name="Refrence Material"
              rules={[{ required: true, message: "Please enter school here" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Continue
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LessonNoteTwo;
