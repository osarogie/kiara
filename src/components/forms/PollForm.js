import { DynamicForm } from 'components/DynamicForm'
import { BLUE } from 'ui'
import 'pollview.scss'

// function Choice({ title }) {
//   let className = 'register choice s__dark__bg bd'

//   return (
//     <div className="ant-row ant-form-item">
//       {/* <div className="ant-form-item-label ant-col-xs-24 ant-col-sm-8">
//         <label for="name" className="ant-form-item-required" title="Title">
//           Title
//         </label>
//       </div> */}
//       <div className="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
//         <div className="ant-form-item-control">
//           <span className="ant-form-item-children">
//             <span className="ant-input-affix-wrapper">
//               <input
//                 type="text"
//                 placeholder="Title"
//                 id="name"
//                 className="ant-input"
//               />
//             </span>
//           </span>
//         </div>
//       </div>
//     </div>
//   )
// }

function generateChoices(fields = {}) {
  return {
    // name: {
    //   label: 'Name',
    //   type: 'text',
    //   rules: [{ required: true }]
    // },
    // body: {
    //   label: 'Description (optional)',
    //   type: 'textarea',
    //   autosize: {
    //     maxRows: 3
    //   },
    //   rules: [{ required: true }]
    // },
    ...fields
    // hide_poll: {
    //   label: 'Hide vote statistics',
    //   type: 'checkbox'
    // }
  }
}

export class PollForm extends React.Component {
  state = {
    0: {
      label: 'Option 1',
      type: 'text',
      rules: [{ required: true, message: 'Option 1 is required' }],
      _destroy: false
    },
    1: {
      label: 'Option 2',
      type: 'text',
      rules: [{ required: true, message: 'Option 2 is required' }],
      _destroy: false
    }
  }
  onSubmit = data => {
    const { onSubmit } = this.props

    let newData = []

    Object.keys(this.state).forEach((f, i, a) => {
      const field = this.state[f]
      if (!field._destroy)
        newData.push({
          title: data[f],
          _destroy: 'false'
        })
    })
    console.log(newData)

    onSubmit && onSubmit(newData)
  }
  onRemoveField = key => {
    this.setState(({ [key]: field }) => ({
      [key]: {
        ...field,
        _destroy: true
      }
    }))
  }
  addField = () => {
    this.setState({
      [new Date().getTime()]: {
        label: 'Other option',
        type: 'text',
        rules: [{ required: true, message: 'This option needs a name :)' }],
        removable: true
      }
    })
  }
  render() {
    return (
      <div
        className="bd p20 mt2 pollform"
        style={{
          borderRadius: 5,
          paddingTop: 38
        }}
      >
        <DynamicForm
          title="Voting Form"
          ref={c => (this.form = c)}
          onSubmit={this.onSubmit}
          onRemoveField={this.onRemoveField}
          fields={this.state}
        />

        <br />
        <div class="ant-row ant-form-item">
          <div class="ant-form-item-label ant-col-xs-24 ant-col-sm-8" />
          <div class="ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-16">
            <div class="ant-form-item-control">
              <span class="ant-form-item-children">
                <span class="ant-input-affix-wrapper">
                  <button onClick={this.addField} className="button">
                    Add option
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
