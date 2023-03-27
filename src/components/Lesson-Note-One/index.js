import { Form, Input, DatePicker, TimePicker, InputNumber, Button } from "antd";
import { useState } from "react";
import "./styles.css";

const { RangePicker } = DatePicker;

const LessonNoteOne = ({ nextStep }) => {
  const [form] = Form.useForm();
  const [average, setAverage] = useState(null);

  const onFinish = (values) => {
    // Perform calculations to get the average here
    // ...

    setAverage(/* calculated average */);
  };

  return (
    <div className="lessonNoteWrapper">
      <div className="lessonNote">
        <div className="lessonNoteInner">
        <h1>Lesson Plan</h1>
          <Form form={form} onFinish={nextStep} className="formWrapper">
            <Form.Item label="Name" name="name">
              <Input />
            </Form.Item>

            <Form.Item label="School" name="school">
              <Input />
            </Form.Item>

            <Form.Item label="Class" name="class">
              <Input />
            </Form.Item>

            <Form.Item label="Subject" name="subject">
              <Input />
            </Form.Item>

            <Form.Item label="Topic" name="topic">
              <Input />
            </Form.Item>

            <Form.Item label="Date" name="date">
              <DatePicker />
            </Form.Item>

            <Form.Item label="Period" name="period">
              <InputNumber />
            </Form.Item>

            <Form.Item label="Matric No." name="matricNo">
              <InputNumber />
            </Form.Item>

            <Form.Item label="Time" name="time">
              <TimePicker />
            </Form.Item>

            <Form.Item label="Duration" name="duration">
              <InputNumber />
            </Form.Item>

            {/* <Form.Item label="Average">{average}</Form.Item> */}

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

export default LessonNoteOne;
