#include<stdio.h> 
#include<math.h> 
#define PI 3.142 
 
int main() 
{ 
    int i, degree; 
    float x,sum=0,term,nume,fact; 
    printf("Enter value of degree \n"); 
    scanf("%d", &degree); 
    x=degree*(PI/180); 
    nume=x; 
    fact=1;
    i=2; 
    do 
    {
        term= nume/fact; 
        nume=-nume*x*x; 
        fact=fact*i*(i+1); 
        sum= sum+term; 
        i=i+2; 
    }while(fabs(term)>=0.00001);
    printf("The sine of %d is %.3f",degree,sum); 
    printf("\nUsing inbuilt function sin(%d) is %.3f",degree,sin(x));
    return 0; 
 
} 