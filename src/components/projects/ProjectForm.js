import styles from './ProjectForm.module.css'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjectFom ({btntext}) {
 return (
     <form className={styles.form}>

        <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto"/>

        <Select 
        name="category_id"
        text="Selecione a categoria"
        />

        <Input type="number" text="Orçamento do projeto" name="budget" placeholder="Insira o orçamento total"/>


        <SubmitButton text={btntext}/>
     </form>

     /* dentro de form
     
        
     
     */
 )
}

export default ProjectFom
