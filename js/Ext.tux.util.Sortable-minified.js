Ext.ns('Ext.tux','Ext.tux.util');Ext.tux.util.Sortable=Ext.extend(Ext.util.Sortable,{onSortStart:function(e,t){this.sorting=true;var draggable=new Ext.util.Draggable(t,{threshold:0,revert:this.revert,direction:this.direction,constrain:this.constrain===true?this.el:this.constrain,animationDuration:100});draggable.on({drag:this.onDrag,dragend:this.onDragEnd,scope:this});this.dragEl=t;this.calculateBoxes();if(!draggable.dragging){draggable.onStart(e)}this.oldIndex=this.el.select(this.itemSelector,false).indexOf(draggable.el.dom);this.fireEvent('sortstart',this,e,this.oldIndex)},onDrag:function(draggable,e){var items=this.items,ln=items.length,region=draggable.region,sortChange=false,i,intersect,overlap,item;for(i=0;i<ln;i++){item=items[i];intersect=region.intersect(item);if(intersect){if(this.vertical&&Math.abs(intersect.top-intersect.bottom)>(region.bottom-region.top)/2){if(region.bottom>item.top&&item.top>region.top){draggable.el.insertAfter(item.el)}else{draggable.el.insertBefore(item.el)}sortChange=true}else if(this.horizontal&&Math.abs(intersect.left-intersect.right)>(region.right-region.left)/2){if(region.right>item.left&&item.left>region.left){draggable.el.insertAfter(item.el)}else{draggable.el.insertBefore(item.el)}sortChange=true}if(sortChange){draggable.reset();draggable.moveTo(region.left,region.top);this.calculateBoxes();this.newIndex=this.el.select(this.itemSelector,false).indexOf(draggable.el.dom);this.fireEvent('sortchange',this,draggable.el,this.oldIndex,this.newIndex);return}}}},onDragEnd:function(draggable,e){draggable.destroy();this.sorting=false;this.fireEvent('sortend',this,draggable,e,this.oldIndex,this.newIndex)}});