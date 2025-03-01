/*Step 20
Bits are often grouped into an octet, which is an 8-bit set known as a byte. A byte can represent any number between 0 and 255. Here are the placement values for each bit in a byte:

Example Code
128 | 64 | 32 | 16 | 8 | 4 | 2 | 1
Because bits are often grouped into bytes, it's common to see binary numbers represented in groups of eight, sometimes with leading zeros. For example, the number 52 can be represented as 110100, or 00110100 with leading zeros. Here's how that breaks down with the placement values:

Example Code
128 | 64 | 32 | 16 | 8 | 4 | 2 | 1
  0 |  0 |  1 |  1 | 0 | 1 | 0 | 0
In your decimalToBinary function, convert the number 118 into binary with leading zeros and return it as a string.*/



return "01110110";