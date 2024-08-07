import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from '../chatbot/chatbot.component';

@NgModule({
  declarations: [ChatbotComponent],
  imports: [CommonModule],
  exports: [ChatbotComponent],
})
export class ChatbotModule {}
