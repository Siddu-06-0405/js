function decodeBase64Url(base64Url) {
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  }
  
  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJzZXNzaW9uX2lkIjoiMUhxWFBHLU80bThVaDZUTVd5UTE0T2tLY21DRDhrUk8iLCJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJwcmFrYXNoaXlhbnN1cnlhQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlfSwiaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS9hdXRoIjp7InBvaWQiOiJvcmctUHQ0T3hPcklhbjNlRm10MmxPYWsza2lyIiwidXNlcl9pZCI6InVzZXItUHV4c203bUU5aDJkTTRvR21LaEtxSmFRIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExNTgwOTMwMzMxNzIyNDE1MTU2MSIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MjMzMDY0NzMsImV4cCI6MTcyNDE3MDQ3Mywic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb3JnYW5pemF0aW9uLndyaXRlIG9mZmxpbmVfYWNjZXNzIiwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEcifQ.JwH7ZpCy22ZaQJ87NUWx4-EQG6KWZW9UFd1wxVo5g3tpGMNF2YWv1n4-vL3Anno2II2dsq10hJhcIX8YQTJ36X0ptKTM9igazM1sIKEXc5zkKEF4X9zl67Cg34k-RTlf8gnpVBun-xqWA6SNpTvAAStXG-BLj6deSdKaGwGaqpGfvb_xnE8MZtlKsmNALqEvgRIMjd33IsnT1FMhbff558vHWL5yReLh-ctbYsMvBKJrsfw4myUkM36RQi4IX8_yB1VwfFAm0SGkhBlxGvB0US8QzVUAEDGLE4zkUrpRZqpw3ypSzMqr8ellOaa_bGE1Xk8jrLq0SbImN8FyDt4IYw";
  
  const parts = token.split('.');
  const header = decodeBase64Url(parts[0]);
  const payload = decodeBase64Url(parts[1]);
  
  console.log(header);  // Decoded header
  console.log(payload); // Decoded payload
  