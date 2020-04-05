/*
 * @Author: NoManReady
 * @Date: 2018-06-05 11:09:34
 * @LastEditors: NoManReady
 * @LastEditTime: 2018-06-05 11:55:07
 * @Description: 导入常用的elementUI控件
 */
import Vue from 'vue'
import {
  Dialog,
  Input,
  Switch,
  Select,
  Option,
  Button,
  Table,
  TableColumn,
  Popover,
  Tooltip,
  Form,
  FormItem,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

Vue.use(Dialog)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Form)
Vue.use(FormItem)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message