const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

  const Header = (props) => {
    return (
      <Part name = {props.part}></Part>
    )
  }

  const Content = (props) => {
    return (
      <>
      <Part name = {props.part[0].name} exercises = {props.part[0].exercises}></Part>
      <Part name = {props.part[1].name} exercises = {props.part[1].exercises}></Part>
      <Part name = {props.part[2].name} exercises = {props.part[2].exercises}></Part>
      </>
    )
  }

  const Total = (props) => {
    return (
      <Part exercises = {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}></Part>
    )
  }

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header part = {course.name}></Header>
      <Content part = {course.parts}></Content>
      <Total part = {course.parts}></Total>  
    </div>
  )
} 
export default App
