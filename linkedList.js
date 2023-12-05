class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    append(value){
        const newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
    }
    prepend(value){
        const newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }
    }
    size(){
        return this.size;
    }
    head(){
        return this.head;
    }
    tail(){
        return this.tail;
    }
    NumberAt(index){
        if(index<0 ||index>=this.length){
            return null
        }

        let currentNode= this.head;
        let currentIndex=0;
        while(currentIndex!==index){
            currentNode=currentNode.next;
            currentIndex++;        }
            return currentNode;
    }
    pop(){
        if(!this.head){
            return null
        }
        let currentNode=this.head;
        let newTail=currentNode;
        while(currentNode.next){
            newTail=currentNode
            currentNode=currentNode.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;

        if(this.length===0){
            this.head=null;
            this.tail=null;
        }

        return currentNode;
    }
    contains(value){
        let currentNode=this.head;
        while(currentNode){
            if(currentNode.value===value){
                return true;
            }
            currentNode=currentNode.next;
        }
        return false;
    }
    find(value){
        let currentNode=this.head;
        let currentIndex=0;
        while(currentNode){
            if(currentNode.value===value){
                return currentIndex;
            }
            currentNode=currentNode.next;
            currentIndex++;
        }
        return null;
    }

    toString(){
        let currentNode=this.head;
        let result="";
        while(currentNode){
            result+=`(${currentNode.value}) -> `;
            currentNode=currentNode.next;
        }
        result+="null";
        return result;
    }
    insertAt(value,index){
        if(index<0 || index>this.length){
            return false;
        }
        if(index===0){
            this.append(value);
            return true;
        }
        if(index===this.length){
            this.append(value);
            return true;
        }

        const newNode=new Node(value);
        const prevNode=this.tail(index-1);
        prevNode.next=newNode;
        this.length++;
        return true;
    }
    removeAt(index){
        if(index<0 || index>=this.length){
            return null;
        }

        if(index===0){
            const removedNode=this.head;
            this.head=this.head.next;
            this.length--;

            if(this.length===0){
                this.tail=null;
            }

            return removedNode;
        }

        const prevNode = this.NumberAt(index-1);
        const removedNode=prevNode.next;
        prevNode.next=removedNode.next;
        this.length--;
        if(index===this.length){
            this.tail=prevNode;
        }
        return removedNode;

    }
}