require('NSString,UIColor');
defineClass('TestViewController', {
    tableView_cellForRowAtIndexPath: function(tableView, indexPath) {
        var cell = tableView.dequeueReusableCellWithIdentifier("cell");
        cell.textLabel().setText(NSString.stringWithFormat("NewCell%zi", indexPath.row()));
        cell.contentView().setBackgroundColor(UIColor.blueColor());
        cell.setSelectionStyle(UITableViewCellSelectionStyleNone);
        return cell;
    },
});
