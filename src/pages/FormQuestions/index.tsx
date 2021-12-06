import { FC , useState, useEffect} from 'react';
import api from '../../services/api';
import { getQuestions , postQuestions} from '../../services/question'
import { useParams} from 'react-router-dom';


import { Params } from 'react-router-dom';



const FormQuestions = () => {

    const[questions, setQuestions] = useState<any>([]);
    const[data, setData] = useState<any>([]);
    const[theme, setTheme] = useState({});

    const {id} = useParams();

    
    useEffect(() => {
        if(id){
            getQuestions(id)
            .then((res) => {       
                let data = res.data as any[];
                setData(data);})
            .catch(err => console.log(err));
        }
        
    },[id]) 

    
    return(<div>form  </div>)

}; export default FormQuestions;