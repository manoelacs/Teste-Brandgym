import { FC , useState, useEffect} from 'react';
import api from '../../services/api';
import { getQuestions , postQuestions} from '../../services/question'
import { useParams} from 'react-router-dom';
import Formulary from '../../components/Formulary';
import Container from '../../components/Container';


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
                setData(data);
                setQuestions(res.data.questions as any[])
            })
            .catch(err => console.log(err));
        }
        
    },[id]) 
    
    return(
        <>
       
            <Container>
                <div>Questionário </div>
                <Formulary questions={questions} /> 
            </Container>        
        </>
    )

}; export default FormQuestions;