#include <bits/stdc++.h>
using namespace std;

void printn(int i,string name,int n){
    if(i>n) return;
    cout<<name<<"\n";
    printn(i+1,name,n);
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;

    printn(1,"nandu",n);
    

    return 0;
}