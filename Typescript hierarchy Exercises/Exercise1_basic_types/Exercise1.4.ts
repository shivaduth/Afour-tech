 // ======== Exercise 1.4 ========
  // Instructions:
  // • Add type annotations (as explicit as possible)
  // • Fix errors (if applicable)

  const integer:number = 6;
  const float:number = 6.66;
  const hex:number = 0xf00d;
  const binary:number = 0b1010011010;
  const octal:number = 0o744;
  const negZero:number = -0;
  const actuallyNumber:number = NaN;
  const largestNumber:number = Number.MAX_VALUE;
  const mostBiglyNumber:number = Infinity;

  const members: any[] = [
    integer,
    float,
    hex,
    binary,
    octal,
    negZero,
    actuallyNumber,
    largestNumber,
    mostBiglyNumber
  ];

  members[0] = '12345';

  console.log('[Exercise 1.4]', members);