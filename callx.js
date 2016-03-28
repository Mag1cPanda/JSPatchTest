// callx.js
require('UIView, UIColor, UILabel')
defineClass('ViewController', {
  // 替换这个 -genView 方法
  genView: function() {
    var view = self.ORIGgenView();
    view.setBackgroundColor(UIColor.greenColor())
    var label = UILabel.alloc().initWithFrame(view.frame());
    label.setText("JSPatch");
    label.setTextAlignment(1);
    view.addSubview(label);
    return view;
  }
});