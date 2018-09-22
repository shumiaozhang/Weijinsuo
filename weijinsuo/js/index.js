$(function () {
    // 1 初始化tab成一个区域滚动效果
    // 2. 条件： 父容器套着子容器
    // 3 子容器的尺寸大于父容器的尺寸才能滑动，让UI足够宽正好放下7个UI
   var $parent = $('.parent');
   var $ul = $parent.find('ul');
   var width = 0;
   $parent.find('li').each(function (i, item) {
       width += $(item).outerWidth(true);
   });
   $ul.width(width);
   // 4. 父元素溢出隐藏
    $parent.css({overflow: 'hidden'});

    // 初始化滚动组件
    new IScroll($parent[0],{
        scrollX: true,
        scrollY: false
    });


    $('[data-toggle="tooltip"]').tooltip();
});