#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;
    int sum=0;
    while(n){
        sum+=n%10;
        n/=10;

    }
    cout<<sum;
    return 0;
}