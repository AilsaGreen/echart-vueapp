/**
 * Created by Administrator on 2017/4/1 0001.
 */

import manager from './components/manager/manager.vue';
import forms from './components/forms/form.vue';
import formheader from './components/forms/formheader.vue';
import actions from './components/actions/actions.vue';
import home from './components/home/home.vue';


export default[
  {path:"/home",component:home},
  {path:"/actions",component:actions},
  {path:"/forms/:id",component:forms},
  {path:"/formheader",component:formheader},
  {path:"/manager",component:manager},
   {path:"/",redirect:'/home'},
   {path:"*",redirect:'/home'}
]
