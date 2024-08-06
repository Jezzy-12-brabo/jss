// See https://aka.ms/new-console-template for more information
Console.Title="Grau Tecnico";
Console.WriteLine("Hello, inf07");

string nome,disciplina;
double nota1, nota2,nota3 , media;

Console.WriteLine("Digite o nome do aluno: ");
nome = Console.ReadLine();

Console.WriteLine("Digite o nome da  disciplina: ");
disciplina = Console.ReadLine();

Console.WriteLine("Digite a primeira nota: ");
nota1 = double.Parse(Console.ReadLine());

Console.WriteLine("Digite a segunda nota: ");
nota2 = double.Parse(Console.ReadLine());

Console.WriteLine("Digite a terceira nota: ");
nota3 = double.Parse(Console.ReadLine());

media = (nota1 + nota2 + nota3 ) / 3;

Console.WriteLine("A media do aluno "+" "+nome+" na disciplina "+disciplina+" é "+media);
 if(media >= 7)
{
    Console.WriteLine("APROVADO");
}
else if(media == 6)
{
    Console.WriteLine("RECUPERAÇÃO");
}
else
{
    Console.WriteLine("REPROVADO");
}

