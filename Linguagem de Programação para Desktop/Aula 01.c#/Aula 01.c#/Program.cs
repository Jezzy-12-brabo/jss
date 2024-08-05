// See https://aka.ms/new-console-template for more information
Console.Title = "-JARVIS BAIANO-";
Console.WriteLine("Hello, Info07!");

string nome;
string sobrenome;
Int32 anonascimento;
Int32 anoatual;

Console.WriteLine("Digite seu nome");
nome= Console.ReadLine();

Console.WriteLine("Digite so seu sobrenome");
sobrenome= Console.ReadLine();

Console.WriteLine("Ola como esta ? "+nome+" "+sobrenome);

Console.WriteLine("Digite seu ano de nascimento: ");
anonascimento = Convert.ToInt32(Console.ReadLine());

Console.WriteLine("Digite o ano atual: ");
anoatual = Convert.ToInt32(Console.ReadLine());

Int32 idadecalculada = anoatual - anonascimento;

Console.WriteLine("Nossa,"+nome+ " o senhor, está com essa idade! " + idadecalculada + "anos! ");
Console.Beep();

Console.ReadKey();

Decimal valorhora = 0;
Decimal horastrabalhadas = 0;
Decimal valorreceber = 0;

Console.Write("Informe o seu valor/hora: ");
valorhora = Convert.ToDecimal(Console.ReadLine());

Console.Write("A quantidade de horas trabalhadas: ");
horastrabalhadas= Convert.ToDecimal(Console.ReadLine());

valorreceber = horastrabalhadas * valorhora;

Console.WriteLine(nome + " ,valor a receber:R$ " + valorreceber);
Console.Beep();

