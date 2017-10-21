

Vue.component('envelope-li', {
  props: ['todo'],
  template:'<li><a href="#"><div><strong>{{todo.name}}</strong><span class="pull-right text-muted"></span><span class="pull-right text-muted"><em>{{todo.rightText}}</em></span></div><div>{{todo.message}}</div></a></li><li class="divider"></li>'
  // template:'<div>{{todo.name}}</div>'
  });

new Vue({
  el:'ul.navbar-right',
  data:{
    envelope:[
      {
        icon:'fa fa-envelope fa-fw',
        uls:[
          {
            islable:false,
            name:'John Doe',
            rightText:'Today',
            message:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
          },
          {
            islable:false,
            name:'John Smith',
            rightText:'Yesterday',
            message:"Lorem Ipsum has been the industry's standard dummy text ever since an kwilnw..."
          },
          {
            islable:false,
            name:'John Smith',
            rightText:'Yesterday',
            message:"Lorem Ipsum has been the industry's standard dummy text ever since the..."
          }
        ],
        test:{
          islable:false,
          name:'John Doe',
          rightText:'Today',
          message:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s..."
        }
      }
    ]
  }
});
