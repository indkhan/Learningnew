from django.shortcuts import render

from groq import Groq


# Create your views here.
#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

from django.shortcuts import render
from django.conf import settings

client = Groq(
    api_key='',
)
# Ensure you have your OpenAI API key in your environment variables


def home(request):
    quote = None
    if request.method == 'POST':
        feeling = request.POST.get('feeling')
        response = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": f"tell me a good anime quote for feeling {feeling}",
        }
    ],
    model="llama3-70b-8192",
)
        quote = response.choices[0].message.content
    
    return render(request, 'quotes/home.html', {'quote': quote})

