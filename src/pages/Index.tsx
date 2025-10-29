import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Index = () => {
  const { toast } = useToast();
  const serverIP = "McRellyWorld.aternos.me";
  const sberPhone = "79930642778";
  const [copiedIP, setCopiedIP] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [selectedDonate, setSelectedDonate] = useState<{name: string, price: number} | null>(null);
  const [copiedNumber, setCopiedNumber] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopiedIP(true);
    toast({
      title: "IP скопирован!",
      description: "Адрес сервера скопирован в буфер обмена",
    });
    setTimeout(() => setCopiedIP(false), 2000);
  };

  const openPaymentDialog = (name: string, price: number) => {
    setSelectedDonate({ name, price });
    setShowPaymentDialog(true);
  };

  const payWithBank = () => {
    setShowPaymentDialog(false);
    setShowPaymentInfo(true);
  };

  const copyPaymentNumber = () => {
    navigator.clipboard.writeText(sberPhone);
    setCopiedNumber(true);
    toast({
      title: "Номер скопирован!",
      description: "Номер карты скопирован в буфер обмена",
    });
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxNiwxODUsMTI5LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <Badge className="text-lg px-4 py-2 bg-secondary text-secondary-foreground animate-pulse">
              🎮 ОНЛАЙН
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              McRellyWorld
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              Приветствует McMrDomer! Присоединяйся к самому лучшему серверу
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="bg-card border border-border rounded-lg px-6 py-3 flex items-center gap-3">
                <Icon name="Server" className="text-primary" size={24} />
                <code className="text-lg font-mono text-foreground">{serverIP}</code>
              </div>
              
              <Button 
                onClick={copyToClipboard}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 transition-all hover:scale-105"
              >
                {copiedIP ? (
                  <>
                    <Icon name="Check" size={20} className="mr-2" />
                    Скопировано!
                  </>
                ) : (
                  <>
                    <Icon name="Copy" size={20} className="mr-2" />
                    Скопировать IP
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            О сервере
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Сервер работает на версии <span className="text-secondary font-bold">Minecraft 1.16.5</span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-border bg-card hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Sword" className="text-primary" size={28} />
                </div>
                <CardTitle className="text-foreground">PvP Арены</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Эпические сражения на специальных аренах
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" className="text-secondary" size={28} />
                </div>
                <CardTitle className="text-foreground">Выживание</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Строй, развивайся и создавай свой мир
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border bg-card hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-accent" size={28} />
                </div>
                <CardTitle className="text-foreground">Комьюнити</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Дружное сообщество игроков
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="rules" className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Правила
          </h2>
          
          <Card className="max-w-3xl mx-auto border-border bg-card">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {[
                  "Уважай других игроков",
                  "Не используй читы и моды",
                  "Не гриферь постройки других игроков",
                  "Следуй указаниям администрации",
                  "Играй честно и получай удовольствие!"
                ].map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary-foreground text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground text-lg">{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="donate" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Донат
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Поддержи сервер и получи уникальные привилегии! Оплата через СберБанк или Тинькофф.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-border bg-card hover:border-primary transition-all hover:scale-105">
              <CardHeader>
                <Icon name="Shield" className="text-primary mb-2" size={32} />
                <CardTitle className="text-foreground">HERO</CardTitle>
                <CardDescription className="text-muted-foreground">Стань героем сервера</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-4">45₽</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    Fly на спавне
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    RTP
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    +100.000 волюты
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-primary" size={16} />
                    3 дома
                  </li>
                </ul>
                <Button onClick={() => openPaymentDialog('HERO', 45)} className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Купить
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary bg-card relative hover:scale-105 transition-all">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-secondary text-secondary-foreground px-4 py-1">
                  Популярный
                </Badge>
              </div>
              <CardHeader>
                <Icon name="Zap" className="text-secondary mb-2" size={32} />
                <CardTitle className="text-foreground">TITAN</CardTitle>
                <CardDescription className="text-muted-foreground">Сила титана</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-4">89₽</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={16} />
                    Всё из HERO
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={16} />
                    +450.000 волюты
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={16} />
                    5 домов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-secondary" size={16} />
                    Команда /tpahere
                  </li>
                </ul>
                <Button onClick={() => openPaymentDialog('TITAN', 89)} className="w-full mt-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Купить
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border bg-card hover:border-accent transition-all hover:scale-105">
              <CardHeader>
                <Icon name="Crown" className="text-accent mb-2" size={32} />
                <CardTitle className="text-foreground">IMPERATOR</CardTitle>
                <CardDescription className="text-muted-foreground">Власть императора</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground mb-4">235₽</div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Всё из TITAN
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    +945.000 волюты
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    10 домов
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Флай везде
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-accent" size={16} />
                    Команды /tp, /near, /nick, /ec
                  </li>
                </ul>
                <Button onClick={() => openPaymentDialog('IMPERATOR', 235)} className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                  Купить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 McRellyWorld. Создано с ❤️ для игроков
          </p>
        </div>
      </footer>

      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Выберите способ оплаты</DialogTitle>
            <DialogDescription className="text-center">
              {selectedDonate && (
                <span className="text-lg font-bold text-foreground">
                  {selectedDonate.name} - {selectedDonate.price}₽
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 py-4">
            <p className="text-sm text-center text-muted-foreground mb-2">
              Выберите банк для оплаты:
            </p>
            <Button 
              onClick={payWithBank} 
              className="w-full h-14 text-base bg-primary hover:bg-primary/90"
            >
              <Icon name="CreditCard" size={22} className="mr-2" />
              СберБанк
            </Button>
            <Button 
              onClick={payWithBank} 
              className="w-full h-14 text-base bg-secondary hover:bg-secondary/90"
            >
              <Icon name="Wallet" size={22} className="mr-2" />
              Тинькофф
            </Button>
            <Button 
              onClick={payWithBank} 
              className="w-full h-14 text-base bg-accent hover:bg-accent/90"
            >
              <Icon name="Building" size={22} className="mr-2" />
              Альфа-Банк
            </Button>
            <Button 
              onClick={payWithBank} 
              className="w-full h-14 text-base bg-primary/80 hover:bg-primary/70"
            >
              <Icon name="Sparkles" size={22} className="mr-2" />
              СберKids
            </Button>
            <Button 
              onClick={payWithBank} 
              className="w-full h-14 text-base bg-muted hover:bg-muted/90 text-foreground"
            >
              <Icon name="Smartphone" size={22} className="mr-2" />
              Другой банк
            </Button>
          </div>
          <div className="bg-card/50 border border-border rounded-lg p-4 space-y-2">
            <p className="text-sm font-semibold text-foreground text-center mb-2">
              📋 Инструкция после оплаты:
            </p>
            <ol className="text-xs text-muted-foreground space-y-1 list-decimal list-inside">
              <li>Оплатите донат через выбранный банк</li>
              <li>Зайдите на сервер McRellyWorld.aternos.me</li>
              <li>Напишите в чат свой игровой ник и название доната</li>
              <li>Администратор McMrDomer выдаст привилегии в течение 5-15 минут</li>
            </ol>
            <p className="text-xs text-center text-accent font-medium mt-3">
              Если не выдали - напишите скриншот оплаты в Telegram: <a href="https://t.me/nyrislam222" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary">@nyrislam222</a>
            </p>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPaymentInfo} onOpenChange={setShowPaymentInfo}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center">Реквизиты для оплаты</DialogTitle>
            <DialogDescription className="text-center">
              {selectedDonate && (
                <span className="text-lg font-bold text-foreground">
                  {selectedDonate.name} - {selectedDonate.price}₽
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="bg-card/50 border-2 border-primary rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Номер телефона:</span>
                <code className="text-lg font-mono font-bold text-foreground">{sberPhone}</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Сумма:</span>
                <span className="text-lg font-bold text-secondary">{selectedDonate?.price}₽</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">Комментарий:</span>
                <span className="text-sm font-medium text-foreground">Донат {selectedDonate?.name} - McRellyWorld</span>
              </div>
            </div>

            <Button 
              onClick={copyPaymentNumber}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {copiedNumber ? (
                <>
                  <Icon name="Check" size={20} className="mr-2" />
                  Номер скопирован!
                </>
              ) : (
                <>
                  <Icon name="Copy" size={20} className="mr-2" />
                  Скопировать номер
                </>
              )}
            </Button>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
              <p className="text-xs text-center text-foreground">
                <strong>Инструкция:</strong>
              </p>
              <ol className="text-xs text-muted-foreground mt-2 space-y-1 list-decimal list-inside">
                <li>Скопируйте номер кнопкой выше</li>
                <li>Откройте приложение вашего банка</li>
                <li>Выберите "Перевод по номеру телефона"</li>
                <li>Вставьте номер и отправьте {selectedDonate?.price}₽</li>
                <li>В комментарии укажите: Донат {selectedDonate?.name} - McRellyWorld</li>
              </ol>
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-3">
              <p className="text-xs text-center text-muted-foreground">
                После оплаты зайдите на сервер и напишите свой ник в чат.
                Если не выдали - пишите в Telegram: <a href="https://t.me/nyrislam222" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-secondary">@nyrislam222</a>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;