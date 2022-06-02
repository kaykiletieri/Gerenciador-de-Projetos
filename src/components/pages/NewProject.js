import styles from './NewProject.module.css'

import ProjectFom from '../projects/ProjectForm'

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            
            <ProjectFom />
        </div>
    )
}

export default NewProject