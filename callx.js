require('UIView, UIColor, UILabel,NSString')
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
    tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
        var cell = tableView.dequeueReusableCellWithIdentifier("cell");
        cell.textLabel().setText(NSString.stringWithFormat("Cell%zi", indexPath.row()));
        cell.contentView().setBackgroundColor(UIColor.blueColor());
        cell.setSelectionStyle(UITableViewCellSelectionStyleNone);
        return cell;
    },
});
