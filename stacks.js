// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    //start off with empty first node represented by null
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

    peek(){
        return this.top;
    }
    
    isEmpty(){
        if(!this.top){
            return 'there is no values';
        }else{
            return 'there are values';
        }
    }
    display(){
        const result = [];
        if(this.top === null){
            return 'empty stack';
        }
        let currNode = this.peek();
        while(currNode !==null){
            result.push(currNode);
            currNode = currNode.next;
        }
        return result;
    }
}

function main(){
    const starTrek = new Stack();
    starTrek.push('Kirk');
    console.log('Kirk',starTrek);;
    starTrek.push('Spock');
    console.log('Spock',starTrek);;
    starTrek.push('McCoy');
    console.log('McCoy',starTrek);;
    starTrek.push('Scotty');
    console.log('Peek',starTrek.peek())
    console.log('Empty',starTrek.isEmpty());
    console.log('Display',starTrek.display());
   
    starTrek.pop();
    starTrek.pop();
    console.log('Second Display', starTrek.display());
 
}
    main();

    //3. Check for palindromes using a stack 
    function is_palindrome(s) {
        s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

        let letters = []; //stack
        let rword = '';
        for(let i = 0; i < s.length;i++){
            letters.push(s[i]);
        }
        for(let i = 0; i < s.length;i++){
            rword +=letters.pop();
        }
        if(s === rword){
            return 'it is a palindrome';
        }
        return 'it is not a palindrome';
    }
    
    // True, true, true, false
    console.log(is_palindrome("dad"));
    console.log(is_palindrome("A man, a plan, a canal: Panama"));
    console.log(is_palindrome("1001"));
    console.log(is_palindrome("Tauhida"));

    //4. Matching parentheses in an expression

    function matchinParenth(str){
        let stack = [];
        let map = {
            '(':')',
            '[':']',
            '{':'}'
        }
        //'(){}[]'
        //'(){}[]
        //stack = '('
        for (let i = 0; i < str.length; i++) {
            // If character is an opening brace add it to a stack
            if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
                stack.push(str[i]);
            }
            //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
            else {
                let last = stack.pop();
    
                //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
                if (str[i] !== map[last]) {
                    return false
                }
            }
        }
            if(stack.length !== 0){
                return false;
            }
            return true;
        
    }
    console.log(matchinParenth('(){}[]'));
    console.log(matchinParenth('[{()}]'));
    console.log(matchinParenth('[{()}'));

    //5. Sort stack

    // function sortStack(stack){
    //     let temp = new Stack();
    //     while(!isEmpty(stack)){
    //         let currNode = stack.top;
    //         stack.pop();

          
    //     }
    //     console.log('Sorted stack = ',s2);
    // }