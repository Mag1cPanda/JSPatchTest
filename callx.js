require('UIView, UIColor, UILabel')
defineClass('ViewController', {
  genView: function() {
    var view = self.ORIGgenView();
    view.setBackgroundColor(UIColor.greenColor())
    var label = UILabel.alloc().initWithFrame(view.bounds());
    label.setTextAlignment(1);
    label.setText("JSPatch");
    view.addSubview(label);
    return view;
  }
});

defineClass('TestViewController', {
    viewDidLoad: function() {
        self.super().viewDidLoad();
        self.view().setBackgroundColor(UIColor.redColor());
    },
});
