import { Form, Select, Space } from 'antd';
import { Controller } from 'react-hook-form';


type TPHSelectProps = {
    label: string;
    name: string;
    options: { value: string; label: string; disabled?: boolean; }[];
    disabled?:boolean;
}


const PHSelect = ({ label, name, options ,disabled}: TPHSelectProps) => {


    return (

  
            <Controller
                name={name}

                render={({ field, fieldState: { error } }) => (
                    <Form.Item label={label}>
                    <Select
                        style={{ width: "100%" }}
                        {...field}
                        options={options}
                        disabled={disabled}
                        
                    />
                    {error&& <small style={{color:'red'}} > {error.message} </small>}
                    </Form.Item>
                )}
            />



                

     




    );
};

export default PHSelect;
