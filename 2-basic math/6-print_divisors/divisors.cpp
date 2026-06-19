#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    if (!(cin >> n)) return 0;

    vector<int> divisors;
    
    for (int i = 1; i * i <= n; ++i) {
        if (n % i == 0) { 
            divisors.push_back(i);
            if (n / i != i) { 
                divisors.push_back(n / i);
            }
        }
    }


    for (size_t i = 0; i < divisors.size(); ++i) {
        cout << divisors[i] << " ";
    }
    cout << "\n";

    return 0;
}
