require('UIView, UIColor, UILabel')
defineClass('ViewController', {
  genView: function() {
    var view = self.ORIGgenView();
    view.setBackgroundColor(UIColor.greenColor())
    var label = UILabel.alloc().initWithFrame(view.bounds());
    label.setText("JSPatch");
    view.addSubview(label);
    return view;
  }
});
