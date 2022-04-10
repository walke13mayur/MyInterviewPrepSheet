class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    // find method actually returns value if its pesent
    find(value){
        if(this.root === null) return false;
        var current = this.root ;
        var found =false;
        while (current && !found) {
            if (value < current.value) {
                current= current.left;
            } else if(value> current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    // contains method return true or false based on searched value
    contains(value){
        if(this.root === null) return false;
        var current = this.root ;
        var found =false;
        while (current && !found) {
            if (value < current.value) {
                current= current.left;
            } else if(value> current.value){
                current = current.right;
            }else{
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root;
        var data = [];
       var queue =[];
        queue.push(node);
        while (queue.length) {
           node = queue.shift()
           if (node.left) queue.push(node.left);
           if (node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        var data = [];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

}


var tree = new BinarySearchTree()
tree.insert(13);
tree.insert(10);
tree.insert(2);
tree.insert(20);
tree.find(10);
tree.contains(12);
tree.BFS();
tree.BFS();
tree.BFS();


// console.log(tree.DFSPreOrder());
// console.log(tree.DFSInOrder());
console.log(tree.DFSPostOrder());