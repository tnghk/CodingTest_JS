let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split('\n').map(v => v.trim());
const N = Number(input[0]);

let tree = {};

for(let i = 1; i <= N; i++) {
  let [node, left, right] = input[i].split(' ');
  tree[node] = [left, right];
}

function preorder(node) {
  if(node === ".")  return "";
  let [left, right] = tree[node];
  let ret = node;
  ret += preorder(left);
  ret += preorder(right);

  return ret;
}

function inorder(node) {
  if(node === ".")  return "";
  let [left, right] = tree[node];
  let ret = inorder(left);
  ret += node;
  ret += inorder(right);

  return ret;
}

function postorder(node) {
  if(node === ".")  return "";
  let [left, right] = tree[node];
  let ret = postorder(left);
  ret += postorder(right);
  ret += node;

  return ret;
}

console.log(preorder("A"));
console.log(inorder("A"));
console.log(postorder("A"));