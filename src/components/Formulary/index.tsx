import { FC , useState, useEffect, ReactChild, ReactFragment, ReactPortal} from 'react';
import {  Form, Checkbox, Col, Row, Radio, Input} from 'antd';
import {orderBy} from 'lodash';
import { render } from '@testing-library/react';
import Button from '../Button/Button';
const { TextArea } =  Input;

interface IProps{
  questions: any[]
}
const Formulary: FC<IProps> = ({ questions }) => {

  const [form] = Form.useForm();
  const [checked, setChecked] = useState();

  const onChange = (e: any) => {
    console.log(e);
  };
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  
  const ordered =  orderBy(questions, ['order'], ['asc']);

  const onChange2 = (e: { target: { value: any; }; } | undefined) => {
    console.log('radio2 checked', e.target.value);
    setChecked({
      e.target.value,
    });
  };

    const renderOptions = (options: any[]) =>{

      if(options.length > 1){
        const orderedOptions = orderBy(options, ['order'], ['asc']);
        return <Radio.Group  onChange={() => onChange2() }>           
           { orderedOptions.map((option) => 
              <Radio value={option.text}> { option.text}</Radio>
            )}
          </Radio.Group>
      }
      else if(options.length === 1){
        return <TextArea name={options[0].id} allowClear onChange={onChange} />
      }    
    }

    const renderFormItem = (question: any) => {
      return( 
        <Row key={question.id}>
          <Form.Item name={question.id} /* label={question.text} */ id={question.id}>

            <Col span={24}> 
              <label>{question.text}</label>
            </Col>

            { (question.option_set.length > 1)
                ? <Radio.Group>
                    {renderOptions(question.option_set)}
                  </Radio.Group>
                : <TextArea allowClear onChange={onChange} />
            }        
          </Form.Item>
        </Row>    
      ) 
    }
    if(questions){
      return(     
        <Row>
           <Form
               form={form}
               name="validate_other"  
               layout="vertical" 
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 24 }} 
               onFinish={onFinish}           
           >
             {
               ordered.map(question => {
                  return renderFormItem(question)
               })
             }   
                <Form.Item >
                  <Button htmlType="submit" >Submit</Button>
                </Form.Item>
           </Form>
        </Row>  
       
      )
    }
    else{
      return(<div> not questions</div>)
    }
   
}; export default Formulary;