#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin>>n;
    if(n<=1) {cout<<"Not prime\n";return 0;}
    bool is_prime=true;
    for(int i=2;i*i<=n;++i){
        if(n%i==0 ){ is_prime=false;break;}
        
    }
    if(is_prime) cout<<"Is Prime";
    else cout<<"Not prime";

    return 0;
}