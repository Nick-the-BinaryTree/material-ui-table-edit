const React = require('react')
const ReactDOM = require('react-dom')
const getMuiTheme = require('material-ui/styles/getMuiTheme').default
const baseTheme = require('material-ui/styles/baseThemes/darkBaseTheme')
// const EditTable = require('..')
import EditTable from '..'
const container = document.createElement('div')

document.body.appendChild(container)
const headers = [
  {value: 'Name', type: 'TextField', width: '30vw'},
  {value: 'Address', type: 'TextField', width: '30vw'}
]

const rows = [
  {columns: [
    {value: 'Michael'},
    {value: '1212 Somewhere st.'}
  ]},
  {columns: [
    {value: 'Sara'},
    {value: '1212 Somewhere st.'}
  ]},
  {columns: [
    {value: 'Randy Randerson'},
    {value: '5555 Somewhere st.'}
  ]}
]

const onChange = (row) => {
  console.log(row)
}

const onDelete = (e) => {
  console.log(e)
}

const Main = React.createClass({
  getChildContext () {
    return {muiTheme: getMuiTheme(baseTheme)}
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object.isRequired
  },

  render () {
    return (
      <EditTable
        onChange={onChange}
        onDelete={onDelete}
        rows={rows}
        headerColumns={headers}
        enableDelete={Boolean(true)}
      />
    )
  }
})

ReactDOM.render(
  <Main />,
  container
)
