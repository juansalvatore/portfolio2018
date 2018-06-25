import { combineReducers } from 'redux'
import projectsReducer from './reducer_projects'
import experienceReducer from './reducer_experience'

const rootReducer = combineReducers({
  projects: projectsReducer,
  experience: experienceReducer,
})

export default rootReducer
