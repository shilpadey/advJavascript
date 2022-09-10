class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(data){
        var node = new Node(data);

        if(this.root === null){
            this.root = node;
        }else{
            this.insertNode(this.root,node);
        }

    }
    insertNode(root,node){
        if(node.data < root.data){
            if(root.left === null){
                root.left = node;
            }else{
                this.insertNode(root.left,node);
            }
        }else{
            if(root.right === null){
                root.right = node;
            }else{
                this.insertNode(root.right,node);
            }
        }
    }

    search(root,data){
        if(root === null){
            return null;
        }
        else if(data < root.data){
            return this.search(root.left,data);
        }
        else if(data > root.data){
            return this.search(root.right,data);
        }
        else{
            return root;
        }
    }

    printRoot(){
        return this.root;
    }

    preOrder(node){
        if(node !== null){
            console.log(node.data);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    preOrderIterate(node){
        if(node === null){
            return;
        }

        let stack = [];
        stack.push(node);

        while(stack.length){
           let curr = stack.pop();
           
           console.log(curr.data);
           if(curr.right){
            stack.push(curr.right);
           }
           if(curr.left){
            stack.push(curr.left);
           }
        }
        
    }

    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    findMax(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }
}

var mybst = new BST();

mybst.insert(45);
mybst.insert(39);
mybst.insert(59);
mybst.insert(28);
mybst.insert(44);
mybst.insert(68);
mybst.insert(61);

var root = mybst.printRoot();
console.log(root);
console.log(mybst);

if(mybst.search(root,11)){
    console.log('found');
}else{
    console.log('not found');
}

mybst.preOrder(root);

mybst.preOrderIterate(root);

console.log(mybst.findMin());
console.log(mybst.findMax());