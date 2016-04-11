require('UIView,UIColor,NSString');
defineClass('ViewController', {
    genView: function() {
        var view = UIView.alloc().initWithFrame(CGRectMake(20, 100, 200, 200));
        view.setBackgroundColor(UIColor.greenColor());
        return view;
    },
});

defineClass('TestViewController', {
    tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
        var cell = tableView.dequeueReusableCellWithIdentifier("cell");
        cell.textLabel().setText(NSString.stringWithFormat("NewCell%zi", indexPath.row()));
        cell.contentView().setBackgroundColor(UIColor.blueColor());
        cell.setSelectionStyle(UITableViewCellSelectionStyleNone);
        return cell;
    },
});
