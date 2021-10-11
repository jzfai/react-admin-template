import { EventEmitter } from 'events'
export default new EventEmitter()

//监听
// import Bus from './eventBus'
//
// Bus.addListener('changeSiblingsData', (msg) => {
//   this.setState({
//     bus: msg,
//   });
//   console.log(msg);
// });
//触发：
// import Bus from './eventBus'
//
// Bus.emit('changeSiblingsData', msg);
