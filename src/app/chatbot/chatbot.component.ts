import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  //styleUrls: ['./chatbot.component.css'],
})
export class ChatbotComponent implements OnInit {
  ngOnInit(): void {
    this.loadChatbot();
  }

  loadChatbot(): void {
    const script = document.createElement('script');
    script.type = 'module';
    script.text = `
      import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";
      Chatbot.init({
        chatflowid: "53dfa09a-c47d-4c32-b239-96bf421a03b4",
        apiHost: "https://gustafff-toma10.hf.space",
      });
    `;
    document.body.appendChild(script);
  }
}
