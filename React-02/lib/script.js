// const container = React.createElement(
//   "div",
//   { className: "container", id: "container" },
//   [
//     React.createElement("section", {key : 1}, [
//       React.createElement(
//         "p",
//         {key : 1},
//         "A React Element is a lightweight description of what to render. It is a plain object that describes a component type (such as a built-in DOM component like <div> or a custom component) and any props that should be passed to that component."
//       ),

//       React.createElement(
//         "img",
//         {key : 2 , style : {width : "200px" ,backgroundColor : 'teal' , borderRadius : 8 , padding : 16 } ,src : "https://th.bing.com/th/id/OIP.m4lrYj_DSTohd3RX6ecW3AHaHd?rs=1&pid=ImgDetMain"},

//       ),
//     ]),

//     React.createElement("section", {key : 2}, [
//       React.createElement(
//         "form",
//         {key : 1},
//       [
//        React.createElement('div' , {className : 'input-Group', key : 1} , 
//         [
//           React.createElement('label' , {key : 1 , id:'username' , htmlFor: 'username'} , 'username'),
//           React.createElement('input' , {key : 2 , id:'username'}   )
//         ]
//        ),
//        React.createElement('div' , {className : 'input-Group', key : 2} , 
//         [
//           React.createElement('label' , {key : 1 , id:'password' , htmlFor: 'password' , } , 'password'),
//           React.createElement('input' , {key : 2 , id:'password' , type : 'password'}   )
//         ]
//        )
//       ]
//       ),

//     ]),
//   ]
// );
// root.render(container);
// root.render({
//     $$typeof : Symbol.for('react.element'),
//     type : 'h2',
//     ref:null,
//     props:{

//     children : [

//         {
//          $$typeof : Symbol.for('react.element'),
//         type : 'span',
//         ref:null,
//         props:{
//           children : [
//             {
//                 $$typeof : Symbol.for('react.element'),
//         type : 'button',
//         ref:null,
//         props:{
//                children : 'Hello Button'
//         } ,
//             },
//           ]
//          },
//         },
//         {
//          $$typeof : Symbol.for('react.element'),
//         type : 'b',
//         ref:null,
//         props:{
//           children : 'Hello React '
//          },
//         },
//         {
//          $$typeof : Symbol.for('react.element'),
//         type : 'i',
//         ref:null,
//         props:{
//           children : 'Hello React '
//          },
//         },

//     ]
//     }
// })

const h2 = /*#__PURE__*/React.createElement("h2", null, " Hello JSX");
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);