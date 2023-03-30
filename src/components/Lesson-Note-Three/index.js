import React from "react";
import { Form, Button, Input } from "antd";
import { Link } from "react-router-dom";
import "./styles.css";

const LessonNoteThree = ({ nextStep, prevStep }) => {
  const [form] = Form.useForm();

  return (
    <div className="lessonNoteWrapper">
      <div className="lessonNote">
        <div className="lessonNoteInner">
          <h2>Content of Lesson Note</h2>
          <Form form={form} onFinish={prevStep}>
            <Form.Item
              label="i"
              name=""
              rules={[{ required: true, message: "Please enter school here" }]}
            >
              <Input className="lastInput" />
            </Form.Item>

           

            <Link to="/pagesuccess">
              <Button type="primary">Finish</Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LessonNoteThree;
