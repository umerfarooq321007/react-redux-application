using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using Newtonsoft.Json;

public class Program
{
    public async static void Main()
    {
        HttpClient client = new HttpClient();
        client.BaseAddress = new Uri("http://opengtindb.org/");

        // Add an Accept header for JSON format.
        client.DefaultRequestHeaders.Accept.Add(
        new MediaTypeWithQualityHeaderValue("application/json"));

        // List data response.
        HttpResponseMessage response = client.GetAsync("?ean=4102560080068&cmd=query&queryid=400000000").Result;  // Blocking call! Program will wait here until a response is received or a timeout occurs.
        if (response.IsSuccessStatusCode)
        {
            // Parse the response body.
            string data = await response.Content.ReadAsStringAsync();  //Make sure to add a reference to System.Net.Http.Formatting.dll
            ConvertTextToJSON(data);
        }
        else
        {
            Console.WriteLine("FAILED");
        }

        client.Dispose();


    }

    static public object ConvertTextToJSON(string data)
    {
        Console.WriteLine("JSON DATA: ");
        data = data.Replace("=", ":\"");
        data = data.Replace(",", "");
        data = data.Replace("\n", "\",");
        data = data.Replace(",---\"", " ");
        data = data.Replace(",---", " ");
        data = "{" + data;
        data = data + "}";
        data = data.Replace("{\",", "{");
        data = data.Replace(",}", "}");
        var dynObj = JsonConvert.DeserializeObject(data);
        Console.WriteLine(dynObj);
        return dynObj;
    }
}