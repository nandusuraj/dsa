#include <bits/stdc++.h>
using namespace std;

void printn(int i,int n){
    if(i>n) return;
    cout<<i<<" ";
    printn(i+1,n);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;

    printn(1,n);
    

    return 0;
}