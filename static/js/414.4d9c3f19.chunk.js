(self.webpackChunk_kne_components_button_group=self.webpackChunk_kne_components_button_group||[]).push([[414],{25764:n=>{function t(n){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=25764,n.exports=t},69666:(n,t,e)=>{"use strict";e.d(t,{A:()=>d});var o=e(28711),r=e(28833);e(72241);const d={name:"button-group",summary:'<h1>button-group</h1>\n<h3>\u63cf\u8ff0</h3>\n<p>\u5b9e\u73b0\u4e86\u4e00\u4e2a\u6309\u94ae\u7ec4,loading\u6309\u94ae,\u786e\u8ba4\u6309\u94ae\u548c\u52a0\u8f7d\u6309\u94ae.</p>\n<h3>\u5b89\u88c5</h3>\n<pre><code class="language-shell">npm i --save @kne/button-group\n</code></pre>',description:"\u5b9e\u73b0\u4e86\u4e00\u4e2a\u6309\u94ae\u7ec4,loading\u6309\u94ae,\u786e\u8ba4\u6309\u94ae\u548c\u52a0\u8f7d\u6309\u94ae.",packageName:"@kne/button-group",api:"<h3>ButtonGroup</h3>\n<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>list</td>\n<td>button\u6309\u94ae\u5c5e\u6027\u7684\u6570\u7ec4</td>\n<td>array</td>\n<td>[]</td>\n</tr>\n<tr>\n<td>more</td>\n<td>\u66f4\u591a\u6309\u94ae\u5360\u4f4d</td>\n<td>jsx</td>\n<td>&lt;Button&gt;\u66f4\u591a&lt;Icon type=\"icon-arrow-thin-down\"/&gt;&lt;/Button&gt;</td>\n</tr>\n<tr>\n<td>compact</td>\n<td>\u662f\u5426\u4e3a\u7d27\u51d1\u6a21\u5f0f</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>size</td>\n<td>\u5f53compact\u4e3afalse\u65f6\u4e3a\u6309\u94ae\u95f4\u9694\u5927\u5c0f\uff0c\u5426\u5219\u4e3a\u6309\u94ae\u5927\u5c0f</td>\n<td>'small','middle','large',number</td>\n<td>8</td>\n</tr>\n<tr>\n<td>split,align</td>\n<td>\u53c2\u8003antd Space</td>\n<td>-</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3>ConfirmButton</h3>\n<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>message</td>\n<td>\u5220\u9664\u63d0\u793a</td>\n<td>jsx</td>\n<td>\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f</td>\n</tr>\n<tr>\n<td>title</td>\n<td>\u5220\u9664\u63d0\u793a\u6807\u9898</td>\n<td>jsx</td>\n<td>-</td>\n</tr>\n<tr>\n<td>isDelete</td>\n<td>\u662f\u5426\u4e3a\u5220\u9664\u64cd\u4f5c</td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>onClick</td>\n<td>\u70b9\u51fb\u786e\u8ba4\u540e\u6267\u884c\u7684\u4e8b\u4ef6</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>\u70b9\u51fb\u53d6\u6d88\u540e\u6267\u884c\u7684\u4e8b\u4ef6</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>disabled</td>\n<td>\u6309\u94ae\u662f\u5426\u7981\u7528</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>showCancel</td>\n<td>\u662f\u5426\u663e\u793a\u53d6\u6d88\u6309\u94ae</td>\n<td>boolean</td>\n<td>-</td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>\u53d6\u6d88\u6309\u94ae\u6587\u6848</td>\n<td>string</td>\n<td>\u53d6\u6d88</td>\n</tr>\n<tr>\n<td>okText</td>\n<td>\u786e\u8ba4\u6309\u94ae\u6587\u6848</td>\n<td>string</td>\n<td>\u786e\u8ba4</td>\n</tr>\n<tr>\n<td>isModal</td>\n<td>\u662f\u5426\u4ee5\u5f39\u7a97\u65b9\u5f0f\u5c55\u793a\uff0c\u9ed8\u8ba4\u4e3aPopconfirm</td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>\u5f53isModal\u4e3afalse\u65f6\u751f\u6548\uff0c\u6307\u5b9aPopconfirm\u7684\u5f39\u51fa\u65b9\u5411</td>\n<td>string</td>\n<td>-</td>\n</tr>\n<tr>\n<td>getContainer</td>\n<td>\u6307\u5b9aPopconfirm\u6216Modal\u5f39\u51fa\u4f4d\u7f6e\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u6307\u5b9a</td>\n<td>function</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3>ConfirmLink,ConfirmText</h3>\n<p>\u53e6\u5916\u7684\u4e00\u79cd\u6309\u94ae\u5f62\u5f0f\u53c2\u6570\u540cConfirmButton</p>\n<h3>LoadingButton</h3>\n<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onClick</td>\n<td>\u70b9\u51fb\u6309\u94ae\u89e6\u53d1\u51fd\u6570\uff0c\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2aPromise\uff0c\u5f53Promise\u518dpending\u72b6\u6001\u65f6Button\u5c06\u81ea\u52a8\u5904\u4e8eloading\u72b6\u6001\uff0c\u5f53Promise\u8fd4\u56de\u7ed3\u679c\u4f1a\u81ea\u52a8\u4eceloading\u5207\u6362\u56de\u666e\u901a\u72b6\u6001</td>\n<td>function</td>\n<td>-</td>\n</tr>\n<tr>\n<td>children</td>\n<td>Button\u7684\u5b50\u5143\u7d20\uff0c\u53ef\u4ee5\u4e3ajsx\u6216\u8005function\uff0c\u4e3afunction\u65f6\u53ef\u4ee5\u63a5\u6536\u5230loading\u72b6\u6001\u7528\u6765\u5207\u6362\u663e\u793a\u5185\u5bb9</td>\n<td>jsx,function</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>\n<h3>FetchButton</h3>\n<table>\n<thead>\n<tr>\n<th>\u5c5e\u6027\u540d</th>\n<th>\u8bf4\u660e</th>\n<th>\u7c7b\u578b</th>\n<th>\u9ed8\u8ba4\u503c</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>api</td>\n<td>\u8bf7\u6c42\u53c2\u6570\u53c2\u8003@kne/react-fetch</td>\n<td>object</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>",example:{isFull:!1,className:"button_group_e0271",style:".button_group_e0271 .ant-card {\n  border-color: black;\n  text-align: center;\n  width: 200px;\n}",list:[{title:"ButtonGroup",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { default: ButtonGroup, ConfirmButton } = _ButtonGroup;\nconst { Flex, Button } = antd;\nconst { useState, useEffect } = React;\n\nconst Example = () => {\n  const [width, setWidth] = useState(200);\n  return (<Flex gap={8}>\n    <div style={{ width: `${width}px` }}>\n      <ButtonGroup\n        list={[{\n          type: 'primary', children: '\u64cd\u4f5c1'\n        }, {\n          children: '\u64cd\u4f5c2'\n        }, {\n          children: '\u64cd\u4f5c3', disabled: true\n        }, {\n          children: '\u64cd\u4f5c3', message: '\u786e\u5b9a\u8981\u6267\u884c\u64cd\u4f5c\u5417\uff1f', disabled: true\n        }, {\n          children: '\u64cd\u4f5c3', message: '\u786e\u5b9a\u8981\u6267\u884c\u64cd\u4f5c\u5417\uff1f'\n        }]}\n      />\n    </div>\n    <Flex gap={8}>\n      <Button\n        onClick={() => {\n          setWidth((width) => {\n            return width + 20;\n          });\n        }}\n      >\n        \u589e\u52a0\u5bb9\u5668\u5bbd\u5ea6\n      </Button>\n      <Button\n        onClick={() => {\n          setWidth((width) => {\n            return width - 20;\n          });\n        }}\n      >\n        \u51cf\u5c11\u5bb9\u5668\u5bbd\u5ea6\n      </Button>\n    </Flex>\n  </Flex>);\n};\n\nconst CompactExample = () => {\n  const [width, setWidth] = useState(200);\n  return (<Flex gap={8}>\n    <div style={{ width: `${width}px` }}>\n      <ButtonGroup\n        compact\n        list={[{\n          type: 'primary', children: '\u64cd\u4f5c1'\n        }, {\n          children: '\u64cd\u4f5c2'\n        }, {\n          children: '\u64cd\u4f5c3'\n        }, {\n          children: '\u64cd\u4f5c3', message: '\u786e\u5b9a\u8981\u6267\u884c\u64cd\u4f5c\u5417\uff1f'\n        }]}\n      />\n    </div>\n    <Flex gap={8}>\n      <Button\n        onClick={() => {\n          setWidth((width) => {\n            return width + 20;\n          });\n        }}\n      >\n        \u589e\u52a0\u5bb9\u5668\u5bbd\u5ea6\n      </Button>\n      <Button\n        onClick={() => {\n          setWidth((width) => {\n            return width - 20;\n          });\n        }}\n      >\n        \u51cf\u5c11\u5bb9\u5668\u5bbd\u5ea6\n      </Button>\n    </Flex>\n  </Flex>);\n};\n\nconst LoadChildren = ({ children }) => {\n  const [loading, setLoading] = useState(true);\n  useEffect(() => {\n    setTimeout(() => {\n      setLoading(false);\n    }, 1000);\n  }, []);\n  if (loading) {\n    return null;\n  }\n  return children({\n    onClick: () => {\n      console.log('\u52a0\u8f7d\u5b8c\u6210');\n    }\n  });\n};\nconst FunctionProps = () => {\n  const [width, setWidth] = useState(200);\n  return (<Flex gap={8}>\n    <div style={{ width: `${width}px` }}>\n      <ButtonGroup\n        list={[(props) => {\n          return (<Button {...props} type=\"primary\">\n            \u64cd\u4f5c1\n          </Button>);\n        }, (props) => {\n          return <Button {...props}>\u64cd\u4f5c2</Button>;\n        }, (props) => {\n          return <Button {...props}>\u64cd\u4f5c3</Button>;\n        }, (props) => {\n          return (<LoadChildren key={props.key}>\n            {({ onClick }) => {\n              return (<ConfirmButton\n                {...props}\n                isModal={props.isDropdown}\n                message=\"\u786e\u5b9a\u8981\u6267\u884c\u64cd\u4f5c\u5417\uff1f\"\n                onClick={onClick}\n              >\n                \u64cd\u4f5c4\n              </ConfirmButton>);\n            }}\n          </LoadChildren>);\n        }]}\n      />\n    </div>\n    <Flex gap={8}>\n      <Button\n        onClick={() => {\n          setWidth((width) => {\n            return width + 20;\n          });\n        }}\n      >\n        \u589e\u52a0\u5bb9\u5668\u5bbd\u5ea6\n      </Button>\n      <Button\n        onClick={() => {\n          setWidth((width) => {\n            return width - 20;\n          });\n        }}\n      >\n        \u51cf\u5c11\u5bb9\u5668\u5bbd\u5ea6\n      </Button>\n    </Flex>\n  </Flex>);\n};\n\nconst BaseExample = () => {\n  return <div>\n    <Flex vertical gap={8}>\n      <div>base:</div>\n      <Example />\n      <div>compact:</div>\n      <CompactExample />\n      <div>function props:</div>\n      <FunctionProps />\n    </Flex>\n  </div>;\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_ButtonGroup",packageName:"@kne/current-lib_button-group",importStatement:'import * as _ButtonGroup from "@kne/button-group"',component:o},{name:"antd",packageName:"antd",component:r}]},{title:"LoadingButton",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { LoadingButton } = _ButtonGroup;\nconst { Space, App } = antd;\nconst BaseExample = () => {\n  const { message } = App.useApp();\n  const clickHandler = () => {\n    message.success('\u70b9\u51fb\u6309\u94ae1s\u540e\u5b8c\u6210\u52a0\u8f7d');\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        message.success('\u5b8c\u6210');\n        resolve();\n      }, 1000);\n    });\n  };\n  return (<Space wrap>\n    <LoadingButton onClick={clickHandler}>\u6309\u94ae</LoadingButton>\n    <LoadingButton onClick={clickHandler}>\n      {(isLoading) => (isLoading ? '\u6b63\u5728\u52a0\u8f7d\u4e2d...' : '\u5207\u6362\u52a0\u8f7d\u6587\u6848')}\n    </LoadingButton>\n  </Space>);\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_ButtonGroup",packageName:"@kne/current-lib_button-group",importStatement:'import * as _ButtonGroup from "@kne/button-group"',component:o},{name:"antd",packageName:"antd",component:r}]},{title:"ConfirmButton",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:'const { ConfirmButton, ConfirmLink, ConfirmText } = _ButtonGroup;\nconst { Flex } = antd;\nconst BaseExample = () => {\n  return <Flex gap={8} vertical>\n    <Flex gap={8}>\n      <ConfirmButton message="\u786e\u5b9a\u8981\u5220\u9664\u5417?" onClick={() => {\n        return new Promise((resolve) => {\n          setTimeout(() => {\n            console.log(\'\u786e\u5b9a\u5220\u9664\');\n            resolve();\n          }, 500);\n        });\n      }}>\u5220\u9664</ConfirmButton>\n\n      <ConfirmButton disabled message="\u786e\u5b9a\u8981\u5220\u9664\u5417?" onClick={() => {\n        console.log(\'\u786e\u5b9a\u5220\u9664\');\n      }}>\u5220\u9664</ConfirmButton>\n\n      <ConfirmButton title="\u786e\u5b9a\u8981\u5220\u9664\u5417?"\n                     message="\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664"\n                     onClick={() => {\n                       return new Promise((resolve) => {\n                         setTimeout(() => {\n                           console.log(\'\u786e\u5b9a\u5220\u9664\');\n                           resolve();\n                         }, 500);\n                       });\n                     }}>\u5220\u9664</ConfirmButton>\n\n      <ConfirmButton isDelete message="\u786e\u5b9a\u8981\u5220\u9664\u5417?" onClick={() => {\n        return new Promise((resolve) => {\n          setTimeout(() => {\n            console.log(\'\u786e\u5b9a\u5220\u9664\');\n            resolve();\n          }, 500);\n        });\n      }}>\u5220\u9664</ConfirmButton>\n\n      <ConfirmButton isDelete title="\u786e\u5b9a\u8981\u5220\u9664\u5417?"\n                     message="\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664"\n                     onClick={() => {\n                       return new Promise((resolve) => {\n                         setTimeout(() => {\n                           console.log(\'\u786e\u5b9a\u5220\u9664\');\n                           resolve();\n                         }, 500);\n                       });\n                     }}>\u5220\u9664</ConfirmButton>\n    </Flex>\n    <Flex gap={8}>\n      <ConfirmButton isModal message="\u786e\u5b9a\u8981\u5220\u9664\u5417?" onClick={() => {\n        return new Promise((resolve) => {\n          setTimeout(() => {\n            console.log(\'\u786e\u5b9a\u5220\u9664\');\n            resolve();\n          }, 500);\n        });\n      }}>\u5220\u9664</ConfirmButton>\n\n      <ConfirmButton isModal title="\u786e\u5b9a\u8981\u5220\u9664\u5417?"\n                     message="\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664"\n                     onClick={() => {\n                       return new Promise((resolve) => {\n                         setTimeout(() => {\n                           console.log(\'\u786e\u5b9a\u5220\u9664\');\n                           resolve();\n                         }, 500);\n                       });\n                     }}>\u5220\u9664</ConfirmButton>\n\n      <ConfirmButton isModal isDelete message="\u786e\u5b9a\u8981\u5220\u9664\u5417?" onClick={() => {\n        return new Promise((resolve) => {\n          setTimeout(() => {\n            console.log(\'\u786e\u5b9a\u5220\u9664\');\n            resolve();\n          }, 500);\n        });\n      }}>\u5220\u9664</ConfirmButton>\n\n      <ConfirmButton isModal isDelete title="\u786e\u5b9a\u8981\u5220\u9664\u5417?"\n                     message="\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664\u5220\u9664"\n                     onClick={() => {\n                       return new Promise((resolve) => {\n                         setTimeout(() => {\n                           console.log(\'\u786e\u5b9a\u5220\u9664\');\n                           resolve();\n                         }, 500);\n                       });\n                     }}>\u5220\u9664</ConfirmButton>\n    </Flex>\n    <Flex gap={8}>\n      <ConfirmLink onClick={() => {\n        console.log(\'\u5220\u9664\');\n      }}>\u5220\u9664</ConfirmLink>\n      <ConfirmText onClick={() => {\n        console.log(\'\u5220\u9664\');\n      }}>\u5220\u9664</ConfirmText>\n    </Flex>\n  </Flex>;\n};\n\nrender(<BaseExample />);\n\n',scope:[{name:"_ButtonGroup",packageName:"@kne/current-lib_button-group",importStatement:'import * as _ButtonGroup from "@kne/button-group"',component:o},{name:"antd",packageName:"antd",component:r}]},{title:"FetchButton",description:"\u8fd9\u91cc\u586b\u5199\u793a\u4f8b\u8bf4\u660e",code:"const { FetchButton } = _ButtonGroup;\n\nconst BaseExample = () => {\n  return <div>\n    <FetchButton api={{\n      loader: async () => {\n        return new Promise((resolve, reject) => {\n          setTimeout(() => {\n            resolve({ data: 'xxxxx' });\n          }, 1000);\n        });\n      }\n    }} onClick={(data) => {\n      console.log(data);\n    }}>\u70b9\u51fb\u52a0\u8f7d\u6570\u636e</FetchButton>\n  </div>;\n};\n\nrender(<BaseExample />);\n\n",scope:[{name:"_ButtonGroup",packageName:"@kne/current-lib_button-group",importStatement:'import * as _ButtonGroup from "@kne/button-group"',component:o},{name:"antd",packageName:"antd",component:r}]}]}}},11448:(n,t,e)=>{"use strict";var o=e(94922),r=e.n(o),d=e(87558),s=e(55199),i=e(89946),a=e.n(i),l=e(13050),u=e(1488),c=e.n(u),p=e(89261);window.PUBLIC_URL="/button-group";const m={remote:"components-core",url:"https://registry.npmmirror.com",tpl:"{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build",defaultVersion:"0.1.10"};(0,l.preset)({remotes:{default:m,"components-core":m,"components-iconfont":{remote:"components-iconfont",url:"https://registry.npmmirror.com",tpl:"{{url}}/@kne-components%2f{{remote}}/{{version}}/files/build",defaultVersion:"0.1.3"}}});const h=(()=>{const n=a().create({validateStatus:function(){return!0}});return t=>t.hasOwnProperty("loader")&&"function"===typeof t.loader?Promise.resolve(t.loader(c()(t,["loader"]))).then((n=>({data:{code:0,data:n}}))).catch((n=>(s.message.error(n.message||"\u8bf7\u6c42\u53d1\u751f\u9519\u8bef"),{data:{code:500,msg:n.message}}))):n(t)})();(0,d.preset)({ajax:h,loading:(0,p.jsx)(s.Spin,{delay:500,style:{position:"absolute",left:"50%",padding:"10px",transform:"translateX(-50%)"}}),error:null,empty:(0,p.jsx)(s.Empty,{}),transformResponse:n=>{const{data:t}=n;return n.data={code:0===t.code?200:t.code,msg:t.msg,results:t.data},n}});var g=e(65457),B=e(94679),f=e(14152),C=e.n(f),k=(e(91296),e(46446));const x=C().ExampleRoutes,b=n=>{let{preset:t,themeToken:e,...o}=n;return(0,p.jsx)(B.HashRouter,{children:(0,p.jsx)(x,{...o,paths:[{key:"components",path:"/",title:"\u9996\u9875"}],preset:t,themeToken:e,readme:k.default,pageProps:{menu:null}})})};g.createRoot(document.getElementById("root")).render((0,p.jsx)(r().StrictMode,{children:(0,p.jsx)(b,{preset:{ajax:h},themeToken:{colorPrimary:"#4F185A"}})}))},72241:()=>{}}]);
//# sourceMappingURL=414.4d9c3f19.chunk.js.map